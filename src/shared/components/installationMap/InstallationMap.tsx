import * as React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {observable, action} from "mobx";
import {observer} from "mobx-react";

import styles from './installationMap.module.scss';

export class InstallationMapStore {

    constructor() {
    }

}

@observer
export default class InstallationMap extends React.Component <{}, {}> {

    private store:InstallationMapStore;

    constructor() {
        super();
        this.store = new InstallationMapStore();
    }


    public render() {
        let installationMapImgSrc = require("./images/installationMapFingerprint.png");
        return (
            <div className={styles.installationMap}>
                <div className="installationMap-links">
                    <p></p>
                    <iframe width="300" height="300" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col5+from+1mudBCbNaPYLZH9UUcgpt4gT5b0Sp3o8rzZDDxIHf&amp;viz=MAP&amp;h=false&amp;lat=28.673681979724474&amp;lng=-72.84259781562483&amp;t=1&amp;z=1&amp;l=col5&amp;y=2&amp;tmplt=2&amp;hml=ONE_COL_LAT_LNG"></iframe>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSflQdN956q7Xh5caO8z8jIaF6uMLBkKrSxFvPi8OhNBWB247w/viewform">Add your portal to the map</a>
                </div>
            </div>
        );
    }
}
