/**
 * @author rgorai
 * @description Reduce a {@link FormSpecs} object into a related object
 * @param formSpecKeys The list of keys of a FormSpecs object.
 * @param mutation Function returning a [newKey, newValue] pairing for each
 *                 {@link formSpecKeys} element. Return _undefined_ if a
 *                 certain property doesn't need to be in the new object.
 * @param mutation.currKey Represents the current {@link formSpecKeys} in
 *                         the reduction iteration to mutate.
 * @returns A new object generated by the 'mutation' reducer.
 */
export const reduceFormSpecs = <T>(
  formSpecKeys: Array<keyof FormSpecs<T>>,
  mutation: (
    currKey: keyof FormSpecs<T>
  ) => [newKey: string, newValue: any] | undefined
) =>
  formSpecKeys.reduce((p, c) => {
    const [key, value] = mutation(c) ?? [null]
    return key ? { ...p, [key]: value } : p
  }, {}) as { [newKey: string]: any }
