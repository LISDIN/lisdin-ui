type InputOption = {
  label: string
  name: string
}

export declare global {
  /**
   * @author rgorai
   * @description specs for a form input
   * @param label form label
   * @param type input type
   * @param defaultValue input's starting value
   * @param required whether or not the input is required
   * @param options list of options if input requires it
   * @param props any additional input props
   */
  type FormSpec = {
    label: string
    type: string
    defaultValue: string | Array<string>
    required?: boolean
    options?: Array<InputOption>
    props?: any
  }

  /**
   * @author rgorai
   * @description an object of {@link FormSpec} values to generate forms more efficiently
   * @param T type that the form is based on
   */
  type FormSpecs<T> = { readonly [_ in keyof T]-?: FormSpec }
}
