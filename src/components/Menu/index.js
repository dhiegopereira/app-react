import { Header, Item, Nav } from './styles';

export default function Menu() {    

    return (
            <Header>
                <Nav>
                    <Item to='/create' key='create'>Cadastrar</Item>                   
                    <Item to='/list' key='list'>Listar</Item>                   
                </Nav>
            </Header>
    )
}
