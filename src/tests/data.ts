import type { Captured } from "./platform-fixtures.js";

export const captured: Captured = {
  "query": "kala namak",
  "productUrl": "https://nutri-beautiful.com/synergie-d-epices-bio/551-kala-namak-sel-noir-100g-naturkraftwerke.html",
  "expected": {
    "productId": "551:0",
    "name": "Kala Namak sel noir 100g - NaturKraftWerke",
    "price": 5.7
  },
  "searchRaw": [
    {
      "id_product": "551",
      "id_product_attribute": "0",
      "name": "Kala Namak sel noir 100g - NaturKraftWerke",
      "url": "https://nutri-beautiful.com/synergie-d-epices-bio/551-kala-namak-sel-noir-100g-naturkraftwerke.html",
      "price": "5,70 €",
      "regular_price": null,
      "unit_price": null,
      "brand": null,
      "flags": [],
      "button": "absent",
      "availability": "https://schema.org/InStock"
    },
    {
      "id_product": "863",
      "id_product_attribute": "0",
      "name": "Harpagophytum BIO 40 % – 60 gélules – Dynveo",
      "url": "https://nutri-beautiful.com/confort-articulaire/863-harpagophytum-bio-40-60-gelules-dynveo.html",
      "price": "28,41 €",
      "regular_price": "29,90 €",
      "unit_price": null,
      "brand": null,
      "flags": [
        "product-flag discount Prix réduit",
        "product-flag new Nouveau"
      ],
      "button": "absent",
      "availability": "https://schema.org/InStock"
    }
  ],
  "productRaw": {
    "info": {
      "name": "Accueil",
      "sku": null,
      "gtin": null,
      "brand": null,
      "description": "Sel noir indien naturel d’origine volcanique. Goût soufré. Idéal cuisine végétalienne, ayurvédique ou indienne. 100 g en verre blanc.",
      "price": "5.7",
      "availability": "https://schema.org/InStock"
    },
    "id_product": "551",
    "id_product_attribute": "0",
    "data_quantity": 9,
    "button": "enabled",
    "ingredients": null,
    "nutrition": [],
    "url": "https://nutri-beautiful.com/synergie-d-epices-bio/551-kala-namak-sel-noir-100g-naturkraftwerke.html",
    "unit_price": null
  },
  "cartEmpty": {
    "total_text": "0,00 €",
    "products": []
  },
  "cartFilled": {
    "quantity": 2,
    "raw": {
      "total_text": "11,40 €",
      "products": [
        {
          "id_product": "551",
          "id_product_attribute": "0",
          "name": "Kala Namak sel noir 100g - NaturKraftWerke",
          "quantity": "2",
          "unit_price": 5.7,
          "line_total": 11.4,
          "available_quantity": null
        }
      ]
    }
  }
};
