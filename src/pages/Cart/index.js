import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1579006188&ims=326x" alt=""/>
                        </td>
                        <td>
                            <strong>Tênis muito massa</strong>
                            <span>R$129,99</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={2}/>
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,89</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>
                <Total>
                    <span>TOTAL:</span>
                    <strong>R$1920,00</strong>
                </Total>
            </footer>
        </Container>
    );
};
