fetch("https://myexample.com", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "foo=bar&blah=1",
}).then((response) => response.json());

/**
 * method - GET | POST | PUT | DELETE | HEAD;
 * url - URL da requisição;
 * headers – cabeçalho;
 * body - corpo da requisição;
 * referrer - referência da requisição;
 * mode - cors | no-cors | same-origin;
 * credentials - indica se os cookies devem ser enviados junto com a requisição;
 * redirect - follow | error | manual;
 * integrity - valor de integridade da fonte;
 * cache - modo do cache (default | reload | no-cache).
 */
