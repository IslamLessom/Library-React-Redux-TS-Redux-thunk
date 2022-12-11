import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import BooksAction from '../action/rootAction'


export const BooksActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(BooksAction, dispatch)
}