const BASE = 'https://fakerapi.it/api/v2';

async function fetchFaker(path: string, params?: Record<string, any>) {
    const url = new URL(`${BASE}${path}`);
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
            }
        }
    }
    
    const res = await fetch(url.toString(), { 
        method: 'GET', 
        headers: { 'Accept': 'application/json' } 
    });
    
    if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        throw new Error(`Faker API Error [${res.status}]: ${res.statusText} ${errBody}`);
    }
    
    const json = await res.json(); 
    return json;
}

function wrapList(type: string, response: any) { 
    const items = response.data || []; 
    return { type, items: JSON.stringify(items), items_raw: items }; 
}

export async function getAddresses(params: any) { return wrapList('addresses', await fetchFaker('/addresses', params)); }
export async function getBooks(params: any) { return wrapList('books', await fetchFaker('/books', params)); }
export async function getCompanies(params: any) { return wrapList('companies', await fetchFaker('/companies', params)); }
export async function getCreditCards(params: any) { return wrapList('credit_cards', await fetchFaker('/credit_cards', params)); }
export async function getImages(params: any) { return wrapList('images', await fetchFaker('/images', params)); }
export async function getPersons(params: any) { return wrapList('persons', await fetchFaker('/persons', params)); }
export async function getPlaces(params: any) { return wrapList('places', await fetchFaker('/places', params)); }
export async function getProducts(params: any) { return wrapList('products', await fetchFaker('/products', params)); }
export async function getTexts(params: any) { return wrapList('texts', await fetchFaker('/texts', params)); }
export async function getUsers(params: any) { return wrapList('users', await fetchFaker('/users', params)); }
export async function getCustom(params: any) { return wrapList('custom', await fetchFaker('/custom', params)); }
