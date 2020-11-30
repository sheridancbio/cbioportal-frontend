import * as React from 'react';
import GitZip from 'shared/lib/gitzipAPI';

export class StudyDataDownloadLink extends React.Component<
    { studyId: string; className?: string },
    {}
> {
    handleClick() {
        //alert(this.props.studyId);
        GitZip.zipRepo(
            'https://github.com/cBioPortal/datahub/tree/master/public/' +
                this.props.studyId,
            undefined
        );
    }

    render() {
        return (
            <a
                className="dataset-table-download-link"
                style={{ display: 'block' }}
                href="#"
                onClick={this.handleClick.bind(this)}
            >
                <i className="fa fa-download" />
            </a>
        );
    }
}
