import { Price } from "../../../lib/price";
import { ProductOrder } from "../../../types";

export const Customizations = ({  order, updateQuantity, updateOption }: { updateOption: (optionId: number, choiceId: number) => void, order: ProductOrder, updateQuantity: (n: number)=> void  }) => {

    const product = order.product

    return (
    <div className="flex flex-col gap-y-5">
      <div className="mt-4 mb-1 sm:mt-0 flex justify-start items-center text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700">
        <label htmlFor={`quantity-${product.id}`} className="block ml-4">
          الكمية
        </label>
        <select
          id={`quantity-${product.id}`}
          name={`quantity-${product.id}`}
          className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={order.quantity}
          onChange={(e) => {
            updateQuantity(Number.parseInt(e.target.value))
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
      {product.productOptions.map(option => (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline px-1 pb-1" key={option.id}>
          <div>
            <div
              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
              id="label-notifications"
            >
              {option.optionName}
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="max-w-lg">
              <div className="mt-4 space-y-4">
                {option.options.map(choice => (
                  <div className="flex items-center" key={choice.id}>
                    <input
                      id={choice.id.toString()}
                      name={option.optionName}
                      checked={choice.id === order.productOptions[option.id]}
                      onChange={() => {updateOption(option.id, choice.id)}}
                      type="radio"
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label htmlFor={choice.id.toString()} className="mx-3 block text-sm  font-normal text-gray-700">
                      {choice.name} <span className="font-bold">{choice.priceIncrement ? `(+ ${Price.toFormattedString(choice.priceIncrement)})` : ''}</span>
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