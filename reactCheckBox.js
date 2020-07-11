// 2020, 7/11, am 8:20-8:35 (duration: 15 mins)
// input type: checkbox, input val: bool
// 受控元件示範

var React = require("react");

var KsCheckForm = createClass(

    getInitialState: function(){

        return{checked: true};

    },

    submitListener: function(eve){

        eve.preventDefault();
        alert(this.state.checked);

    },

    changeListener: function(ev){

        this.setState(

            {checked: ev.target.value}

        );

    },

    render: function(){

        return <form onSubmit={this.state.submitListener}>

            <input
             type="checkbox"
             value=""
             checked={this.state.checked}
             onChange={this.state.changeListener}
            />
            <br/>

            <button type="submit"> OK! Send. </button>

        </form>

    }

);
