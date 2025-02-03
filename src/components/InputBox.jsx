import React,{useId} from 'react'

function InputBox({
  //taking the inputs un destructured way in the funciton 
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,

  className = "",
}) 
{
  const amountInputId = useId();
  // In this specific code, the useId hook is used to generate a unique ID for the input element, which is then used as the value for the id attribute:
  //By using useId, the code ensures that each input element has a unique ID, even if the component is rendered multiple times or in different contexts.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      {/* the className is written in curly braces because we can accept the classname from user also */}
      <div className="w-1/2 ">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        {/* here we need label for swap funcitons so that we can track what was  */}
        <input
          id={amountInputId}
          className="outline-none w-full  px-4 py-1.5 bg-gray-100  rounded-lg"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) // iska matlab on amountchange ek function hoga jisme me ye arguement de raha hu
            //  many times  the input given is in string
          }
          // if we exist only then
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;