(function ($) {
  $(document).on("page:load page:change", async function () {
    const isCheckout = window.location.pathname.includes("/checkouts/");
    let itemsInCart;
    try {
      if (isCheckout) {
        itemsInCart = await fetch("/cart.js").then((res) => res.json());
        itemsInCart = itemsInCart.items;
      } else {
        // order status page custom
        const { checkout } = Shopify;
        itemsInCart = checkout.line_items;
      }
      // element in checkout page
      const productRendersInSidebar = Array.from(
        document.querySelectorAll(
          ".order-summary__section__content .product-table tr.product td.product__image img"
        )
      );
      for (let index = 0; index < itemsInCart.length; index += 1) {
        const item = itemsInCart[index];
        const { key, properties, image } = item;
        if (properties["_customily-preview"]) {
          // run cart/change.js for this id line_item
          productRendersInSidebar[index].src = properties["_customily-preview"];
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
})(Checkout.$);
