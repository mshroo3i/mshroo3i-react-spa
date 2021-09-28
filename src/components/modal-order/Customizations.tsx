import { LegacyRef, useRef } from "react";
import { Product, Option } from "../../data/products";
import { ProductOrder } from "../../lib/cart-reducer";

export const Customizations = ({ customizations, product, setOrder, order }: { order: ProductOrder, customizations: Option[], product: Product, setOrder: (order: ProductOrder) => void  }) => {
    const selectQuantity = useRef() as LegacyRef<HTMLSelectElement> | undefined;
    // const [customization, setCustomization] = useState({
    //   quantity: 1,
    //   options:
    // })

    return (
    <div className="flex flex-col gap-y-5">
      <div className="mt-4 mb-1 sm:mt-0 flex justify-start flex-row-reverse items-center text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700">
        <label htmlFor={`quantity-${product.id}`} className="block ml-4">
          الكمية
        </label>
        <select
          id={`quantity-${product.id}`}
          name={`quantity-${product.id}`}
          className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ref={selectQuantity}
          // defaultValue={1}
          onChange={(e) => {
            console.log(e.target.value)
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>

      </div>
      {customizations.map(c => (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline px-1 pb-1 rtl" key={c.id}>
          <div>
            <div
              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
              id="label-notifications"
            >
              {c.description}
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="max-w-lg">
              <div className="mt-4 space-y-4">
                {c.choices.map(choice => (
                  <div className="flex items-center" key={choice.id}>
                    <input
                      id={choice.id.toString()}
                      name={c.description}
                      type="radio"
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label htmlFor={choice.id.toString()} className="mx-3 block text-sm  font-normal text-gray-700">
                      {choice.text} {choice.price.toFormattedString()}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      ))}
    </div>

  )}