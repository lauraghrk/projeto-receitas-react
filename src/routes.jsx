import Home from './pages/Home'
import Salgados from './pages/Salgados'
import Doces from './pages/Doces'
import Sobre from './pages/Sobre'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/salgados' component={Salgados} />
                <Route path='/doces' component={Doces} />
                <Route path='/sobre' component={Sobre} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes