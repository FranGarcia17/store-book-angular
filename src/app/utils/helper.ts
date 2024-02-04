//Extensions
import Swal from 'sweetalert2';
import 'animate.css';

//Interfaces
import { Book } from '../models/book.model';

export function actionSucess(action: string) {
  Swal.fire({
    icon: 'success',
    position: 'center',
    showConfirmButton: false,
    timer: 1500,
    title: `Libro ${action} correctamente`,
    showClass: {
      popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
    },
    hideClass: {
      popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
    },
  });
}

export function warning() {
  Swal.fire({
    icon: 'warning',
    position: 'center',
    showConfirmButton: false,
    timer: 1500,
    title: 'Este libro ya se encuentra guardado',
    showClass: {
      popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
    },
    hideClass: {
      popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
    },
  });
}

export function showDetail(item: Book) {
  Swal.fire({
    title: `${item.book.title}`,
    text: `${item.book.synopsis}`,
    imageUrl: `${item.book.cover}`,
    imageWidth: 400,
    imageHeight: 450,
    imageAlt: 'Custom image',
    showConfirmButton: true,
    color: '#ffffff',
    background: 'rgb(17 24 39)',
  });
}
