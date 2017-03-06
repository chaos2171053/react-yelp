import React, { Component} from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

export class Header extends Component {

    render() {
        return (
            <div className={styles.topbar}>
                <Link to='/'><h1>Yelp</h1></Link>
                <section>
                    chaos2171053
                 </section>
            </div>
        )
    }
}
export default Header;
