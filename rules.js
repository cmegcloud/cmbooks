/* ===============================
   CMBOOKS – BUSINESS TYPE RULES
================================ */

const BUSINESS_RULES = {
  service: {
    purchase: false,
    inventory: false,
    manufacturing: false
  },
  trading: {
    purchase: true,
    inventory: true,
    manufacturing: false
  },
  manufacturing: {
    purchase: true,
    inventory: true,
    manufacturing: true
  }
};

/* TEMP – later from backend */
const CURRENT_BUSINESS_TYPE = "service";
// change to: trading | manufacturing

function applyBusinessRules() {
  const rules = BUSINESS_RULES[CURRENT_BUSINESS_TYPE];

  document.querySelectorAll('[data-module]').forEach(el => {
    const moduleName = el.getAttribute('data-module');

    if (rules[moduleName] === false) {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  });
}

document.addEventListener('DOMContentLoaded', applyBusinessRules);
