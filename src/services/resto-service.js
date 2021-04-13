export default class RestoService {
    _apiBase = 'http://localhost:3004'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} with ${res.status} status`)
        }

        return await res.json();
    }

    postDataJSON = async (url, data) => {
        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not post request on ${url}`)
        }

        return res.json();
    }

    getMenu = async () => {
        return await this.getResource('/menu');
    }

    getFood = async (foodId) => {
        const menu = await this.getResource(`/menu`);

        return menu.find(food => food.id === foodId);
    }

    generateOrder = async (order, orderPrice) => {
        const items = order.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                preview: item.images[0],                
                fullPrice: item.price * item.qtty,
                itemPage: `${this._apiBase}/menu/${item.href}`,
            }
        })

        const orderNumber = await this.getOrderNumber();

        const newOrder = {
            id: orderNumber,
            orderPrice,
            orderItems: items
        };        

        this.postDataJSON('/orders', newOrder);
    }

    getOrderNumber = async () => {
        const res = await this.getResource('/orders');

        const orderNumber = res.length + 1;

        return orderNumber;
    }
}