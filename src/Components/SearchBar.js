import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Input } from 'rsuite';
import { InputGroup } from 'rsuite';
import { Icon } from 'rsuite';



class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }

    handleChange = (text) => {
        this.setState({value: text});
    }
    
    handleSubmit = (event) => {
      console.log("j'ai été submité " + this.state.value);

        this.props.filterShoes(this.state.value);
        event.preventDefault();
    }
    
    render() {
        const styles = {
            width: 300,
          };
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <InputGroup style={styles}>
                    <Input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <InputGroup.Button>
                    <Icon icon="search" />
                    </InputGroup.Button>
                </InputGroup>
            </div>
          </form>
        );
    }
}

  export default SearchBar;
