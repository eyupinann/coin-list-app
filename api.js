

const fetchData = () => {
    return fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
            method: 'GET',
            headers: {
                "X-CMC_PRO_API_KEY": "a7a4eeb2-0e34-4943-83dd-f461fd705dc6"
            },
        }
    );
};
export default fetchData;
