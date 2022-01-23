Vue.component('coupon', {
    template: '<input @blur="couponApplied" placeholder="Enter coupon code">',
    methods: {
        couponApplied: function() {
            this.$emit('applied', 'ElementX')
        }
    }
});

let app = new Vue({
    el: '#root',
    data: {
        isApplied : false,
        couponCode: ''
    },
    methods: {
        notifyApplied: function(value) {
            alert("Applied : " + value)
            this.couponCode = value
            this.isApplied = true
        }
    }
})