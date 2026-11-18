<script setup lang="ts">
import Swal from 'sweetalert2'

interface Props {
  title?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  imageAlt?: string
  confirmButtonText?: string
  confirmButtonColor?: string
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Elementales',
  image: '',
  imageWidth: 250,
  imageHeight: 250,
  imageAlt: 'Imagen de alerta',
  confirmButtonText: 'OK',
  confirmButtonColor: '#2563eb',
  backgroundColor: '#dcfce7'
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'close'): void
}>()

// Nuxt Image
const $img = useImage()
const config = useRuntimeConfig()

const getImageUrl = (path: string) => {
  if (!path) return ''

  // Imágenes externas
  if (/^https?:\/\//i.test(path)) return path

  // Respetar baseURL de GitHub Pages
  const baseURL = config.app.baseURL.endsWith('/')
    ? config.app.baseURL
    : `${config.app.baseURL}/`

  return `${baseURL}${path.replace(/^\/+/, '')}`
}

const showAlert = async () => {
  const imageUrl = getImageUrl(props.image)

  // Generar URL de Nuxt Image (disponible si el proveedor está configurado)
  const optimizedUrl = props.image
    ? $img(props.image, {
        width: props.imageWidth,
        height: props.imageHeight,
        fit: 'contain'
      })
    : ''

  const result = await Swal.fire({
    title: props.title,

    // En GitHub Pages utilizamos la imagen estática original
    imageUrl,

    imageWidth: props.imageWidth,
    imageHeight: props.imageHeight,
    imageAlt: props.imageAlt,

    confirmButtonText: props.confirmButtonText,
    confirmButtonColor: props.confirmButtonColor,

    background: props.backgroundColor,

    width: 'min(550px, 92vw)',

    padding: '.2rem',

    showCloseButton: true,

    customClass: {
      popup: 'rounded-3xl',
      image: 'object-contain',
      confirmButton: 'rounded-xl px-8 py-3 font-semibold'
    }
  })

  if (result.isConfirmed) {
    emit('confirm')
  } else {
    emit('close')
  }
}

defineExpose({
  showAlert
})
</script>
