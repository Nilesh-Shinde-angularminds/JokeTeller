import {react ,Component}from "react"
import MainPage from "./components/MainPage";


class app extends Component{

     constructor() {
        super();
        this.state = {
            totalCount:0,
            languageTotal:{}
        };
    }


   async componentDidMount() {
    await fetch('https://v2.jokeapi.dev/info').then(res => res.json()).then(res => {
           if (res) {
                this.setState({ totalCount: res.jokes.totalCount });
                this.setState({languageTotal: res.jokes.idRange})
            }


            // this.setState({
            //     categaries1: this.state.items.jokes.categories.map(itms => {
            //        return()
                   
            //     })
            // });
        })
    }


    render()
    {
        
        return(
           <MainPage state={this.state}/>

        )
    }
}
export default app