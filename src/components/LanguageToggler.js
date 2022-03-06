import React from 'react';
import './LanguageToggler.css';
import { redirectionType, redirectToPath } from './PageNavigation';
import { isLanguageEN } from '../utils/LanguageSetting';

class LanguageToggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname,
        };

        this.historyUnlisten = props.history.listen(() => {
            this.setState({
                currentPath: window.location.pathname,
            });
        });
    }

    componentWillUnmount() {
        this.historyUnlisten();
    }

    getLinkNL(history) {
        if (isLanguageEN()) {
            return (
                <a
                    href={this.state.currentPath}
                    onClick={() => { redirectToPath(history, this.state.currentPath, redirectionType.PAGE); }}
                >NL
                </a>
            );
        }
        return <b>NL</b>;
    }

    getLinkEN(history) {
        if (!isLanguageEN()) {
            return (
                <a
                    href={`${this.state.currentPath}?lang=en`}
                    onClick={() => { redirectToPath(history, `${this.state.currentPath}?lang=en`, redirectionType.PAGE); }}
                >EN
                </a>
            );
        }
        return <b>EN</b>;
    }

    render() {
        return (
            <div id='language-toggler' className={(this.props.competencesView ? 'in-competences-overview' : '')}>
                {this.getLinkNL(this.props.history)} | {this.getLinkEN(this.props.history)}
            </div>
        );
    }
}

export default LanguageToggler;