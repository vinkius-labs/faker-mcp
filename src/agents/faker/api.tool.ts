import { f } from '../../vurb.js';
import { FakerPresenter } from '../../views/index.js';
import { 
    getAddresses, getBooks, getCompanies, getCreditCards, 
    getImages, getPersons, getPlaces, getProducts, 
    getTexts, getUsers, getCustom 
} from '../../engine/faker-engine.js';

const locales = [
    'ar_EG', 'ar_JO', 'ar_SA', 'at_AT', 'bg_BG', 'bn_BD', 'cs_CZ', 'da_DK', 'de_AT', 'de_CH', 'de_DE', 
    'el_CY', 'el_GR', 'en_AU', 'en_CA', 'en_GB', 'en_HK', 'en_IN', 'en_NG', 'en_NZ', 'en_PH', 'en_SG', 
    'en_UG', 'en_US', 'en_ZA', 'es_AR', 'es_ES', 'es_PE', 'es_VE', 'et_EE', 'fa_IR', 'fi_FI', 'fr_BE', 
    'fr_CA', 'fr_CH', 'fr_FR', 'he_IL', 'hr_HR', 'hu_HU', 'hy_AM', 'id_ID', 'is_IS', 'it_CH', 'it_IT', 
    'ja_JP', 'ka_GE', 'kk_KZ', 'ko_KR', 'lt_LT', 'lv_LV', 'me_ME', 'mn_MN', 'ms_MY', 'nb_NO', 'ne_NP', 
    'nl_BE', 'nl_NL', 'pl_PL', 'pt_BR', 'pt_PT', 'ro_MD', 'ro_RO', 'ru_RU', 'sk_SK', 'sl_SI', 'sr_Cyrl_RS', 
    'sr_Latn_RS', 'sr_RS', 'sv_SE', 'th_TH', 'tr_TR', 'uk_UA', 'vi_VN', 'zh_CN', 'zh_TW'
] as const;

export const getAddressesTool = f.query('get_addresses')
  .describe('Generate mock address data.')
  .instructions('Fetches random address data. Can be filtered by country_code.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .withOptionalString('country_code', 'Force the country of the addresses returned')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getAddresses(i));

export const getBooksTool = f.query('get_books')
  .describe('Generate mock book information.')
  .instructions('Fetches random book data including titles, authors, and ISBNs.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getBooks(i));

export const getCompaniesTool = f.query('get_companies')
  .describe('Generate mock company data.')
  .instructions('Fetches random company data including names, VATs, and websites.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getCompanies(i));

export const getCreditCardsTool = f.query('get_credit_cards')
  .describe('Generate mock credit card information.')
  .instructions('Fetches random credit card data including numbers, types, and expiration dates.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getCreditCards(i));

export const getImagesTool = f.query('get_images')
  .describe('Generate mock image URLs.')
  .instructions('Fetches random image URLs. Supports sources like Picsum and types like "any" or "pokemon".')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getImages(i));

export const getPersonsTool = f.query('get_persons')
  .describe('Generate mock personal information.')
  .instructions('Fetches random personal data. Supports genders "male", "female", and "other".')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getPersons(i));

export const getPlacesTool = f.query('get_places')
  .describe('Generate mock place data.')
  .instructions('Fetches random place data including coordinates.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getPlaces(i));

export const getProductsTool = f.query('get_products')
  .describe('Generate mock product data.')
  .instructions('Fetches random product data including prices and categories.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .withOptionalNumber('_categories_number', 'Number of product categories to be returned')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getProducts(i));

export const getTextsTool = f.query('get_texts')
  .describe('Generate mock text content.')
  .instructions('Fetches random text content like words, sentences, and paragraphs.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getTexts(i));

export const getUsersTool = f.query('get_users')
  .describe('Generate mock user account data.')
  .instructions('Fetches random user account data including usernames, emails, and passwords.')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => await getUsers(i));

export const getCustomTool = f.query('get_custom')
  .describe('Generate custom mock data structures.')
  .instructions('Generates custom data by defining fields. Pass a JSON object mapping field names to Faker types (e.g. {"myField": "name", "otherField": "email"}).')
  .withOptionalEnum('_locale', locales, 'The language of the data returned')
  .withOptionalNumber('_quantity', 'The number of rows requested (Min: 1, Max: 1000)')
  .withOptionalNumber('_seed', 'A seed for the random generator to get consistent results')
  .withOptionalJson('fields', 'Key-value pairs of field name to Faker type')
  .egress(2 * 1024 * 1024)
  .returns(FakerPresenter)
  .handle(async (i) => {
    const { fields, ...rest } = i;
    const params: Record<string, any> = { ...rest };
    if (fields && typeof fields === 'object') {
        Object.assign(params, fields);
    }
    return await getCustom(params);
  });
