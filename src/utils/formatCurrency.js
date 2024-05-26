// function to format the currency and style it according to your locale...

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NP', {
    currency: "NRS",
    style: "currency",
});

export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}