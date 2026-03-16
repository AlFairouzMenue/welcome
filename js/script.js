// ====== رقم واتساب للمحل (بدون +) ======
const WHATSAPP_NUMBER = "972598471353"; // غيّره لرقم المحل
const TABLE_CHANGE_PASSWORD = "1234";   // غيّرها لكلمة مرور المدير

// ====== TABLE ID ======
const TABLE_KEY = "alfairouz_table_id_v1";

function getTableId() {
    return (localStorage.getItem(TABLE_KEY) || "").trim() || null;
}

function setTableId(t) {
    localStorage.setItem(TABLE_KEY, t);
}

function openTableModal(onSave) {
    const modal = document.getElementById("tableModal");
    const input = document.getElementById("tableModalInput");
    const btn = document.getElementById("tableModalSave");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    input.value = "";
    input.style.borderColor = "rgba(212, 175, 55, 0.30)";
    setTimeout(() => input.focus(), 50);

    function close() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        btn.removeEventListener("click", handleSave);
        input.removeEventListener("keydown", handleEnter);
    }

    function handleSave() {
        const t = (input.value || "").trim();
        if (!t) {
            input.focus();
            input.style.borderColor = "rgba(255,80,80,0.8)";
            return;
        }
        close();
        onSave(t);
    }

    function handleEnter(e) {
        if (e.key === "Enter") handleSave();
    }

    btn.addEventListener("click", handleSave);
    input.addEventListener("keydown", handleEnter);
}

function openPasswordModal(onSuccess) {
    const modal = document.getElementById("passwordModal");
    const input = document.getElementById("passwordModalInput");
    const btn = document.getElementById("passwordModalSave");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    input.value = "";
    input.style.borderColor = "rgba(212, 175, 55, 0.30)";
    setTimeout(() => input.focus(), 50);

    function close() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        btn.removeEventListener("click", handleSave);
        input.removeEventListener("keydown", handleEnter);
    }

    function handleSave() {
        const pass = (input.value || "").trim();

        if (!pass) {
            input.focus();
            input.style.borderColor = "rgba(255,80,80,0.8)";
            return;
        }

        if (pass !== TABLE_CHANGE_PASSWORD) {
            input.value = "";
            input.focus();
            input.style.borderColor = "rgba(255,80,80,0.8)";
            alert("كلمة المرور غير صحيحة");
            return;
        }

        close();
        onSuccess();
    }

    function handleEnter(e) {
        if (e.key === "Enter") handleSave();
    }

    btn.addEventListener("click", handleSave);
    input.addEventListener("keydown", handleEnter);
}

let TABLE_ID = getTableId();

if (!TABLE_ID) {
    openTableModal((t) => {
        TABLE_ID = t;
        setTableId(t);
        initApp();
    });
} else {
    initApp();
}

function initApp() {
    const tableBadge = document.getElementById("tableBadge");
    if (tableBadge) {
        tableBadge.innerHTML = `رقم الطاولة: <span class="table-number">${TABLE_ID}</span>`;
    }

    const changeTableBtn = document.getElementById("changeTableBtn");
    if (changeTableBtn) {
        changeTableBtn.addEventListener("click", () => {
            openPasswordModal(() => {
                openTableModal((t) => {
                    TABLE_ID = t;
                    setTableId(t);
                    window.location.reload();
                });
            });
        });
    }

    const yEl = document.getElementById("y");
    if (yEl) yEl.textContent = new Date().getFullYear();

    const data = [
        {
            id: "sweets",
            title: "الحلويات",
            items: [
                { name: "كريب نوتيلا", price: "20" },
                { name: "كريب دي اسنشل", price: "30" },
                { name: "كريب فيرو", price: "20" },
                { name: "كريب كيندر", price: "20" },
                { name: "كريب لوتس", price: "20" },
                { name: "كريب بستاشيو", price: "20" },
                { name: "كنافة نوتيلا", price: "20" },
                { name: "بان كيك", price: "20" },
                { name: "وافل", price: "20" },
                { name: "ستيك وافل", price: "20" },
            ]
        },
        {
            id: "cake",
            title: "الكيك",
            items: [
                { name: "تشيز كيك بلوباري", price: "5" },
                { name: "تشيز كيك نوتيلا", price: "12-7" },
                { name: "تشيز كيك لوتس", price: "12-7" },
                { name: "تشيز كيك بستاشيو", price: "12-7" },
                { name: "تشيز كيك كيندر", price: "12-7" },
                { name: "كيك قطع نوتيلا", price: "10" },
                { name: "كيك قطع لوتس", price: "10" },
            ]
        },
        {
            id: "cold",
            title: "مشروبات باردة",
            items: [
                { name: "مشروبات غازية", price: "5" },
                { name: "مي صغيرة", price: "2" },
                { name: "مي وسط", price: "4" },
                { name: "آيس لاتيه", price: "12" },
                { name: "آيس موكا", price: "15" },
                { name: "آيس كافيه", price: "15" },
                { name: "آيس سبانش لاتيه", price: "15" },
                { name: "آيس كراميل ميكاتو", price: "15" },
                { name: "ميلك شيك فانيلا", price: "15" },
                { name: "ميلك شيك شوكولاته", price: "15" },
                { name: "ميلك شيك نوتيلا", price: "15" },
                { name: "ميلك شيك اوريو", price: "15" },
                { name: "ميلك شيك لوتس", price: "15" },
                { name: "عصير اناناس", price: "15" },
                { name: "عصير و كادو", price: "15" },
                { name: "عصير مانجا", price: "12" },
                { name: "عصير ليمون ونعنع", price: "12" },
                { name: "عصائر فريش (موسمية)", price: "—" },
                { name: "موهيتو Sprite", price: "15" },
                { name: "موهيتو XL", price: "15" },
            ]
        },
        {
            id: "hot",
            title: "مشروبات ساخنة",
            items: [
                { name: "قهوة تركي", price: "7-5" },
                { name: "قهوة سبريسو", price: "10-6" },
                { name: "نسكافيه", price: "5" },
                { name: "شوكو فرنسي", price: "7" },
                { name: "كابتشينو", price: "10" },
                { name: "أعشاب", price: "5" },
                { name: "كافيه موكا", price: "15" },
                { name: "كافيه نوتيلا", price: "15" },
                { name: "كافيه لاتيه", price: "10" },
                { name: "هوت شوكولات", price: "10" },
                { name: "كراميل ميكاتو", price: "15" },
                { name: "سبانش لاتيه", price: "15" },
                { name: "إسبريسو الفيروز", price: "15" },
            ]
        },
        {
            id: "argileh",
            title: "الأراجيل",
            items: [
                { name: "أرجيلة تفاحتين", price: "25" },
                { name: "أرجيلة فاخر", price: "30" },
            ]
        },
        {
            id: "sandwich",
            title: "السندويشات",
            items: [
                { name: "ساندويش جبنة", price: "7.5" },
                { name: "ساندويش جبنة بلدة", price: "7.5" },
                { name: "ساندويش جبنة K", price: "10" },
                { name: "ساندويش مرتديلا", price: "7.5" },
            ]
        },
    ];

    const menuEl = document.getElementById("menu");
    const qEl = document.getElementById("q");
    const chipsEl = document.getElementById("chips");

    const cartBtn = document.getElementById("cartBtn");
    const cartDrawer = document.getElementById("cartDrawer");
    const closeCart = document.getElementById("closeCart");
    const cartItemsEl = document.getElementById("cartItems");
    const cartCountEl = document.getElementById("cartCount");
    const cartTotalEl = document.getElementById("cartTotal");
    const clearCartBtn = document.getElementById("clearCart");
    const sendWhatsAppBtn = document.getElementById("sendWhatsApp");

    const custName = document.getElementById("custName");
    const custPhone = document.getElementById("custPhone");
    const custNote = document.getElementById("custNote");

    function normalize(s) {
        return (s || "")
            .toString()
            .trim()
            .toLowerCase()
            .replace(/[أإآ]/g, "ا")
            .replace(/ة/g, "ه")
            .replace(/ى/g, "ي")
            .replace(/\s+/g, " ");
    }

    const CART_KEY = `alfairouz_cart_v1_table_${TABLE_ID}`;
    let cart = loadCart();

    function loadCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || {};
        } catch {
            return {};
        }
    }

    function saveCart() {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function priceToNumber(p) {
        const s = (p ?? "").toString().trim();
        if (!s || s === "—") return 0;
        const first = s.split("-")[0];
        const n = Number(first);
        return Number.isFinite(n) ? n : 0;
    }

    function addToCart(item) {
        const id = item._id;
        if (!cart[id]) cart[id] = { ...item, qty: 0 };
        cart[id].qty += 1;
        saveCart();
        updateCartUI();
    }

    function inc(id) {
        cart[id].qty += 1;
        saveCart();
        updateCartUI();
    }

    function dec(id) {
        cart[id].qty -= 1;
        if (cart[id].qty <= 0) delete cart[id];
        saveCart();
        updateCartUI();
    }

    function clearCart() {
        cart = {};
        saveCart();
        updateCartUI();
    }

    function calcTotal() {
        let total = 0;
        for (const id in cart) {
            total += priceToNumber(cart[id].price) * cart[id].qty;
        }
        return total;
    }

    function updateCartUI() {
        const items = Object.values(cart);
        const count = items.reduce((a, it) => a + it.qty, 0);
        cartCountEl.textContent = count;
        cartTotalEl.textContent = calcTotal();

        if (items.length === 0) {
            cartItemsEl.innerHTML = `<div style="color:rgba(238,247,251,.75); padding:10px;">السلة فاضية.</div>`;
            return;
        }

        cartItemsEl.innerHTML = items.map(it => `
            <div class="cart-row">
                <div class="meta">
                    <div class="nm">${it.name}</div>
                    <div class="pr">السعر: ${it.price}</div>
                </div>
                <div class="qty">
                    <button type="button" onclick="window.__dec('${it._id}')">-</button>
                    <div class="q">${it.qty}</div>
                    <button type="button" onclick="window.__inc('${it._id}')">+</button>
                </div>
            </div>
        `).join("");
    }

    window.__inc = inc;
    window.__dec = dec;

    let activeCategory = "all";

    function renderChips() {
        const chips = [
            { id: "all", label: "الكل" },
            ...data.map(c => ({ id: c.id, label: c.title }))
        ];

        chipsEl.innerHTML = chips.map(ch => `
            <span class="chip ${ch.id === activeCategory ? "active" : ""}" data-id="${ch.id}">
                ${ch.label}
            </span>
        `).join("");

        chipsEl.querySelectorAll(".chip").forEach(el => {
            el.addEventListener("click", () => {
                activeCategory = el.dataset.id;
                renderChips();
                renderMenu();
            });
        });
    }

    function renderMenu() {
        const q = normalize(qEl.value);
        const cats = activeCategory === "all" ? data : data.filter(c => c.id === activeCategory);

        menuEl.innerHTML = cats.map(cat => {
            const filtered = cat.items
                .map((it, idx) => ({ ...it, _id: `${cat.id}_${idx}` }))
                .filter(it => {
                    const text = normalize(it.name + " " + it.price);
                    return q ? text.includes(q) : true;
                });

            if (filtered.length === 0) return "";

            return `
                <section class="card" aria-label="${cat.title}">
                    <h2>
                        <span>${cat.title}</span>
                        <span class="count">${filtered.length} صنف</span>
                    </h2>
                    <div class="items">
                        ${filtered.map(it => `
                            <div class="item">
                                <div class="name">${it.name}</div>
                                <div class="right">
                                    <div class="price ${it.price === "—" ? "muted" : ""}">${it.price}</div>
                                    <button class="add-btn" type="button" data-add="${encodeURIComponent(JSON.stringify(it))}">
                                        + أضف
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </section>
            `;
        }).join("");

        menuEl.querySelectorAll("[data-add]").forEach(btn => {
            btn.addEventListener("click", () => {
                const it = JSON.parse(decodeURIComponent(btn.getAttribute("data-add")));
                addToCart(it);
            });
        });
    }

    qEl.addEventListener("input", renderMenu);

    function openCart() {
        cartDrawer.classList.add("open");
        cartDrawer.setAttribute("aria-hidden", "false");
        cartBtn.style.display = "none";
    }

    function closeCartFn() {
        cartDrawer.classList.remove("open");
        cartDrawer.setAttribute("aria-hidden", "true");
        cartBtn.style.display = "flex";
    }

    cartBtn.addEventListener("click", openCart);
    closeCart.addEventListener("click", closeCartFn);

    cartDrawer.addEventListener("click", (e) => {
        if (e.target === cartDrawer) closeCartFn();
    });

    clearCartBtn.addEventListener("click", clearCart);

    function buildWhatsAppText() {
        const items = Object.values(cart);
        const lines = [];
        lines.push("طلب جديد من كافي الفيروز:");
        lines.push(`رقم الطاولة: ${TABLE_ID}`);
        lines.push("--------------------");

        items.forEach(it => {
            lines.push(`• ${it.name} × ${it.qty} (سعر: ${it.price})`);
        });

        lines.push("--------------------");
        lines.push(`المجموع: ${calcTotal()}`);

        const name = custName.value.trim();
        const phone = custPhone.value.trim();
        const note = custNote.value.trim();

        if (name) lines.push(`الاسم: ${name}`);
        if (phone) lines.push(`الرقم: ${phone}`);
        if (note) lines.push(`ملاحظة: ${note}`);

        return lines.join("\n");
    }

    sendWhatsAppBtn.addEventListener("click", () => {
        const count = Object.values(cart).reduce((a, it) => a + it.qty, 0);
        if (count === 0) return alert("السلة فاضية.");
        if (!WHATSAPP_NUMBER) return alert("عدّل رقم واتساب بالمصدر (WHATSAPP_NUMBER).");

        const text = encodeURIComponent(buildWhatsAppText());
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
        window.open(url, "_blank");
    });

    renderChips();
    renderMenu();
    updateCartUI();
}