import topo from '../../assets/topo.png'
import logoVendedor from '../../assets/logo.png'
import antena from '../../assets/Itens/antena2g3g.png'
import antenaWifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import mcu from '../../assets/Itens/nodeMcu.png'

const carrinho = {
    topo: {
        titulo:'Carrinhos',
        imagem: topo
    },
    detalhes: {
        detalhes: 'Detalhes do Carrinho',
        titulo: 'Kit IoT',
        logoVendedor: logoVendedor,
        nomeVendedor: 'Nuvem\'s Shopping',
        descricao: 'Um kit que revoluciona você.',
        preco: 'R$ 99,00'
    },
    itens: {
        titulo: 'Itens do carrinho',
        lista: [    
            {
                nome: 'Antena 2g/3g',
                imagem: antena,
            },
            {
                nome: 'Antena Wifi',
                imagem: antenaWifi,
            },
            {
                nome: 'Modem',
                imagem: modem,
            },
            {
                nome: 'Node MCU',
                imagem: mcu,
            },
        ]
    }
}

export default carrinho