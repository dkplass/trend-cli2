webpackJsonp([6],{"8oMy":function(t,e){},cyId:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{Cartlist:s("7IJu").a},data:function(){return{step:1,cartdata:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:"",order:{user:{}},isLoading:!1}},methods:{getCart:function(){var t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.herokuapp.com/api/hanshou/cart").then(function(e){t.cartdata=e.data.data,t.isLoading=!1})},removeCartItem:function(t){var e=this,s=this,a="https://vue-course-api.herokuapp.com/api/hanshou/cart/"+t;s.isLoading=!0,this.$http.delete(a).then(function(t){s.isLoading=!1,s.getCart(),e.$bus.$emit("cartQty:refresh")})},addCouponCode:function(t){var e=this,s=this,a={code:t};s.isLoading=!0,this.$http.post("https://vue-course-api.herokuapp.com/api/hanshou/coupon",{data:a}).then(function(t){t.data.success?e.$bus.$emit("message:push",""+t.data.message,"success"):e.$bus.$emit("message:push",""+t.data.message,"danger"),s.getCart(),s.isLoading=!1})},createOrder:function(){var t=this,e=this,s=e.form;e.isLoading=!0;this.$refs.observer.validate().then(function(a){a?t.$http.post("https://vue-course-api.herokuapp.com/api/hanshou/order",{data:s}).then(function(s){t.$bus.$emit("message:push","訂單已建立","success"),e.isLoading=!1,s.data.success&&(e.orderId=s.data.orderId,e.getOrder(),e.step=3)}):(t.$bus.$emit("message:push","欄位不完整","success"),e.isLoading=!1)})},getOrder:function(){var t=this,e="https://vue-course-api.herokuapp.com/api/hanshou/order/"+t.orderId;t.step=3,t.isLoading=!0,this.$http.get(e).then(function(e){console.log(t.order),t.order=e.data.order,t.isLoading=!1})},payOrder:function(){var t=this,e=this,s="https://vue-course-api.herokuapp.com/api/hanshou/pay/"+e.orderId;e.isLoading=!0,this.$http.post(s).then(function(s){s.data.success?(t.$bus.$emit("message:push",""+s.data.message,"success"),t.$bus.$emit("cartQty:refresh"),t.getOrder()):(t.$bus.$emit("message:push",""+s.data.message,"danger"),t.$bus.$emit("cartQty:refresh"),t.getOrder()),e.isLoading=!1})}},created:function(){this.getCart()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),s("div",{staticClass:"container"},[s("ul",{staticClass:"row step"},[s("li",{staticClass:"col-4 text-center",class:{active:1===t.step}},[t._v("確認購物車明細")]),t._v(" "),s("li",{staticClass:"col-4 text-center",class:{active:2===t.step}},[t._v("填寫購物人資訊")]),t._v(" "),s("li",{staticClass:"col-4 text-center",class:{active:3===t.step}},[t._v("付款/完成訂單")])]),t._v(" "),1===t.step?[t.cartdata.carts&&t.cartdata.carts.length?s("Cartlist",{attrs:{cartdata:t.cartdata},on:{emitCartItemId:t.removeCartItem,couponCode:t.addCouponCode}}):t._e(),t._v(" "),s("div",{staticClass:"mb-4 step-btn"},[s("router-link",{staticClass:"btn btn-secondary float-left",attrs:{to:"/shop"}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v("\n\t\t\t\t\t繼續購買\n\t\t\t\t")]),t._v(" "),s("a",{staticClass:"btn btn-danger d-inline-block float-right",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.step=2}}},[t._v("\n\t\t\t\t\t下一步，填寫訂購資料\n\t\t\t\t\t"),s("i",{staticClass:"fas fa-arrow-right"})])],1)]:t._e(),t._v(" "),2===t.step?s("div",{staticClass:"my-5 row justify-content-center"},[s("ValidationObserver",{ref:"observer",staticClass:"col-md-6 mx-auto",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[s("ValidationProvider",{attrs:{rules:"required|email",name:"email",slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useremail"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":a[0]},attrs:{type:"text",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),a[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()])]}}],null,!0)}),t._v(" "),s("ValidationProvider",{attrs:{rules:"required",name:"name",slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":a[0]},attrs:{type:"text",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),a[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()])]}}],null,!0)}),t._v(" "),s("ValidationProvider",{attrs:{rules:"required|phone",name:"phone",slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":a[0]},attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t._v(" "),a[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()])]}}],null,!0)}),t._v(" "),s("ValidationProvider",{attrs:{rules:"required",name:"address",slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":a[0]},attrs:{type:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),a[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()])]}}],null,!0)}),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("留言")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-12 mb-4 mt-5 step-btn"},[s("router-link",{staticClass:"btn btn-secondary float-left",attrs:{to:"/shop"}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v("\n\t\t\t\t\t\t上一步，確認購物車明細\n\t\t\t\t\t")]),t._v(" "),s("button",{staticClass:"btn btn-danger d-inline-block float-right",attrs:{disabled:a}},[t._v("\n\t\t\t\t\t\t下一步，完成訂單/付款\n\t\t\t\t\t\t"),s("i",{staticClass:"fas fa-arrow-right"})])],1)]}}],null,!1,4093961169)})],1):t._e(),t._v(" "),3===t.step?s("div",{staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.order.products,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),s("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),s("tr",[s("th",[t._v("姓名")]),t._v(" "),s("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),s("tr",[s("th",[t._v("收件人電話")]),t._v(" "),s("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),s("tr",[s("th",[t._v("收件人地址")]),t._v(" "),s("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),s("tr",[s("th",[t._v("付款狀態")]),t._v(" "),s("td",[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])]):t._e()],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]};var i=s("VU/8")(a,r,!1,function(t){s("8oMy")},null,null);e.default=i.exports}});
//# sourceMappingURL=6.170e3f2f9094fc504354.js.map