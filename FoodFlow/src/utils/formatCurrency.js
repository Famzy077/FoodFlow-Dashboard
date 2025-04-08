import React from "react";

function CurrencyFormatter({ value }) {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return <span className="">{formatter.format(value)}</span>;
}

export default CurrencyFormatter;
