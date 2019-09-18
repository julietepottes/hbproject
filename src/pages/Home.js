import React from 'react';
import '../App.css';
import './Home.css'
import '../components/Menu.css';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Dash from '../components/Dash';


class Home extends React.Component {
    render() {
        return (
            < div className="App" >
                <div><Nav /></div>
                <div><Menu /></div>
                <div><Header /></div>
                <div><Dash /></div>
            </div>
        );
    }

    //   handleClickItem = (e) => {
    //     let newItem = menuData.filter(elem => elem.id === e)[0];
    //     const index = this.state.order.findIndex(
    //       item => item.id === newItem.id
    //     )
    //     if (index >= 0) {
    //       let newOrder = this.state.order
    //       const unityPrice = newOrder[index].price / newOrder[index].quantity
    //       newOrder[index].quantity += 1
    //       newOrder[index].price = newOrder[index].quantity * unityPrice
    //       this.setState({
    //         order: newOrder
    //       })
    //     } else {
    //       const newOrder = {
    //         id: newItem.id,
    //         name: newItem.name,
    //         quantity: 1,
    //         price: newItem.price
    //       }
    //       this.setState({
    //         order: this.state.order.concat(newOrder)
    //       })
    //     }
    //   }

    //   subtractItem = (e) => {
    //     const index = this.state.order.findIndex(item => item.id === e)
    //     let newOrder = this.state.order
    //     const unityPrice = newOrder[index].price / newOrder[index].quantity
    //     newOrder[index].quantity -= 1
    //     newOrder[index].price = newOrder[index].quantity * unityPrice
    //     if (!newOrder[index].quantity) {
    //       newOrder.splice(index, 1)
    //     }
    //     this.setState({
    //       order: newOrder
    //     })
    //   }

    //   addItem = (e) => {
    //     const index = this.state.order.findIndex(item => item.id === e)
    //     let newOrder = this.state.order
    //     const unityPrice = newOrder[index].price / newOrder[index].quantity
    //     newOrder[index].quantity += 1
    //     newOrder[index].price = newOrder[index].quantity * unityPrice
    //     this.setState({
    //       order: newOrder
    //     })
    //   }

    //   removeItem = (e) => {
    //     const index = this.state.order.findIndex(item => item.id === e)
    //     let newOrder = this.state.order
    //     newOrder.splice(index, 1);
    //     this.setState({
    //       order: newOrder
    //     })
    //   }

    //   handleChange = (e) => {
    //     this.setState({ client: e.target.value })
    //   }


}

export default Home;