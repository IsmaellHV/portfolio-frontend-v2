import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { IDownload } from '../Domain/IDownload';

interface IGenericStore {
  loadingApp: boolean;
  loading: boolean;
  textLoading: string;
  listDownload: IDownload[];

  addLoading: (text: string) => void;
  removeLoading: () => void;
  addDownload: (download: IDownload) => void;
  updateDownload: (payload: { _id: string; progress: number }) => void;
  removeDownload: (id: string) => void;
}

export const useGenericStore = create<IGenericStore>()(
  persist(
    (set, get) => ({
      loadingApp: false,
      loading: false,
      textLoading: '',
      listDownload: [],

      addLoading: (text: string) => set({ loading: true, textLoading: text }),
      removeLoading: () => set({ loading: false, textLoading: '' }),
      addDownload: (download: IDownload) => {
        const { listDownload } = get();
        if (listDownload.length >= 5) throw Error('No se pueden añadir mas de 5 descargas');
        set({ listDownload: [...listDownload, download] });
      },
      updateDownload: (payload: { _id: string; progress: number }) => {
        const listDownload = get().listDownload.map((item) => (item._id === payload._id ? { ...item, progress: payload.progress } : item));
        set({ listDownload });
      },
      removeDownload: (id: string) => {
        set({ listDownload: get().listDownload.filter((item) => item._id !== id) });
      },
    }),
    {
      name: 'generic-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ listDownload: state.listDownload }),
    },
  ),
);
