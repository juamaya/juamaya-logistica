import { ref, nextTick } from 'vue'

interface AlertInstance {
  showAlert: () => Promise<void>
}

interface AlertData {
  title: string
  image: string
  imageAlt: string
}

export const useAlert = () => {
  const alertRef = ref<AlertInstance | null>(null)

  // Datos dinámicos de la alerta
  const alerta = ref<AlertData>({
    title: '',
    image: '',
    imageAlt: ''
  })

  // Configurar y abrir alerta
  const abrirAlerta = async (
    title: string,
    image: string,
    imageAlt: string
  ): Promise<void> => {
    alerta.value = {
      title,
      image,
      imageAlt
    }

    // Esperar a que Vue actualice las props
    await nextTick()

    // Abrir SweetAlert2
    await alertRef.value?.showAlert()
  }

  return {
    alertRef,
    alerta,
    abrirAlerta
  }
}
