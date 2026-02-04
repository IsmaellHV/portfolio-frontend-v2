import { toast } from 'sonner';
import type { ConfirmationIcon, SonnerIcon, SonnerPosition } from '../Domain/Types';
import Swal from 'sweetalert2';

export class AdapterGeneric {
  public static isJSON(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  }

  public static async createMessage({ message, icon, position = 'top-right' }: { message: string; icon: SonnerIcon; position?: SonnerPosition }) {
    toast[icon](message, { position, duration: 3000 });
  }

  public static async createAlert({ message, title, container = document.body }: { message: string; title: string; container?: HTMLElement }) {
    Swal.fire({
      title: title,
      html: message,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      target: container,
      customClass: {
        container: 'z-[999999999]',
      },
    });
  }

  public static createConfirmation({ message, title, icon, container = document.body }: { message: string; title: string; icon: ConfirmationIcon; container?: HTMLElement }): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      let swalIcon: 'question' | 'success' | 'warning' | 'error' | 'info';
      let iconColor: string;

      switch (icon) {
        case 'question':
          swalIcon = 'question';
          iconColor = '#1d4ed8';
          break;
        case 'success':
          swalIcon = 'success';
          iconColor = '#16a34a';
          break;
        case 'warning':
          swalIcon = 'warning';
          iconColor = '#eab308';
          break;
        case 'error':
          swalIcon = 'error';
          iconColor = '#dc2626';
          break;
        default:
          swalIcon = 'question';
          iconColor = '#1d4ed8';
          break;
      }

      Swal.fire({
        title: title,
        text: message,
        icon: swalIcon,
        iconColor: iconColor,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3b82f6',
        cancelButtonColor: '#6b7280',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: true,
        focusConfirm: false,
        target: container,
        didOpen: () => {
          const swalContainer = document.querySelector('.swal2-container') as HTMLElement;
          if (swalContainer) {
            swalContainer.style.zIndex = '999999999';
          }
        },
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  }
}
