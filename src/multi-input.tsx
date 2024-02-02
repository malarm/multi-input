
type IMultiInputProps<T extends number | string> = {
  type: T extends number ? 'number' : 'string'
  items: T[]
  setItems: (value: T[]) => void
  addItem: () => void
}


export const MultiInput = <T extends number | string,>(props: IMultiInputProps<T>) => {

  const removeItem = (index: number) => {
    props.setItems(props.items.slice(0, index).concat(props.items.slice(index + 1)))
  }

  const updateItem = (index: number, value: T) => {
    props.setItems(
      props.items.map((item, _index) => index === _index ? value : item)
    )
  }

  const contentBox = (content: T, index: number) => {

    return <div className="bg-black bg-opacity-5 flex flex-row items-center px-1 rounded-lg gap-1 focus-within:bg-opacity-10">
      <p contentEditable onInput={(e) => {
        if (props.type === 'string') {
          updateItem(index, e.currentTarget.innerText as T)
        }
        else {
          updateItem(index, Number(e.currentTarget.innerText) as T)
        }

      }} className="text-sm w-max bg-transparent outline-none">{content}</p>
      <i className="ri-close-line cursor-pointer" onClick={() => removeItem(index)}></i>
    </div>
  }

  return <div className="h-[40px] rounded-xl border border-1 border-gray-300 px-3 py-2 flex flex-row gap-2">
    {props.items.map(contentBox)}

    <div className="p-1 rounded-xl bg-gray-100 grid place-content-center cursor-pointer">
      <i className="ri-add-line" onClick={() => props.addItem()}></i>
    </div>
  </div>
}