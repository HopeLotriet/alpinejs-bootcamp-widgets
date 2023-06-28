document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
        shift: '',
        fee: '',
        open: false,

        transportFees(e) {
            const currentShift = e.target.value;
            this.fee = transportFee(currentShift);
            this.shift = currentShift;
                this.open = true;
            setTimeout(() => {
                this.shift = '',
                    this.fee = '',
                    this.open = false
            }, 3000);
        }
    }))
})