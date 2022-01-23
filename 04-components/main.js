Vue.component('student', {
    template: '<li><slot></slot></li>'
});

Vue.component('card', {
    props: ['title', 'body'],
    template: `
   <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs mx-4 my-4" v-show="isVisible">
       <div class="overflow-auto">
           <h4 class="mb-4 font-semibold float-left">
               {{title}}
           </h4>
           <div class="float-right cursor-pointer" @click="hideModal">x</div>
       </div>
        <p>
          {{body}}
        </p>
      </div>
    `,
    data() {
        return {
            isVisible : true
        }
    },
    methods: {
        hideModal: function() {
            this.isVisible = false;
        }
    }
});

Vue.component('student-list', {
    template: `
        <div>
            <student v-for="student in students" v-text="student.name" :key="student.name"/>
        </div>
    `,
    data() {
        return {
            students : [
                {name: 'Kim', passed: true},
                {name: 'Jong', passed: false},
                {name: 'Barry', passed: false},
                {name: 'Alan', passed: true},
                {name: 'Frost', passed: false},
            ]
        }
    }
});

new Vue({
    el: '#root'
})