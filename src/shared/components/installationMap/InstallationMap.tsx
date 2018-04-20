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
        return (
            <div className={styles.installationMap}>
                <div className="installationMap-links">
                    <p></p>
                    <a href="https://fusiontables.google.com/data?docid=1mudBCbNaPYLZH9UUcgpt4gT5b0Sp3o8rzZDDxIHf&pli=1#map:id=3">View Map</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSflQdN956q7Xh5caO8z8jIaF6uMLBkKrSxFvPi8OhNBWB247w/viewform">Add your portal to the map</a>
                </div>
            </div>
        );
    }
}
