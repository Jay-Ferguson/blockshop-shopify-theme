class ProductUnavailableForm extends HTMLElement{constructor(){super()}connectedCallback(){this.root=this.closest(`[data-product-id='${this.dataset.id}']`),this.form_value=this.querySelector(".product-unavailable--value"),"none"===this.style.display&&this.parentNode.setAttribute("data-empty",!0),this.displayListener()}displayListener(){window.on("theme:product:variantChanged",({detail:{section:t,variant:e}})=>{t===this.root&&(this.style.display=e&&!e.available?"block":"none",this.parentNode.setAttribute("data-empty",!e||e.available),e&&(this.form_value.value=this.form_value.value.split(":")[0]+": "+e.name))})}}const productUnavailableFormEl=customElements.get("product-unavailable-root");productUnavailableFormEl||customElements.define("product-unavailable-root",ProductUnavailableForm);