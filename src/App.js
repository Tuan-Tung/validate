import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import router from './routers';


const menu = [
  {
    lable: "Trang chủ",
    to: "/",
    exact:true
  },
  {
    lable: "Giới thiệu",
    to: "/about",
    exact:false
  },
  {
    lable: "Sản phẩm đã mua",
    to: "/products",
    exact:false
  }
]
const showContent = (router) =>{
  let result = null
     result = router.map((value,index) =>{
       return (
         <Route key={index} path={value.path} exact={value.exact} component={value.main} />
       )
     })
     return result;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header menu={menu}/>
        <Switch>
          {showContent(router)}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
