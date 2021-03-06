﻿import classNames from 'classnames';
import * as React from 'react';
import { WorkflowPhase } from '../interfaces/workItem';

export interface WorkflowStageProps {
  display: string;
  value: WorkflowPhase;
  isActive: boolean;
  clickEventCallback: any;
}

export interface WorkflowStageState {
}

export default class WorkflowStage extends React.Component<WorkflowStageProps, WorkflowStageState> {
  constructor(props: WorkflowStageProps) {
    super(props);
    this.state = {
    };
  }

  public clickWorkflowState = (clickedElement: React.MouseEvent<HTMLElement>, newState: WorkflowPhase) => {
    this.props.clickEventCallback(clickedElement, newState);
    }

  private handleKeyPressWorkFlowState = (event: React.KeyboardEvent<HTMLDivElement>, newState: WorkflowPhase) => {
    if (event.keyCode == 13) {
      this.props.clickEventCallback(event, newState);
    }
    return;
  }

  public render() {
    const classes = classNames( 'retrospective-workflowState', {
      active: ( this.props.isActive ),
    });
    const ariaLabel = this.props.isActive
      ? 'Selected ' + this.props.display + ' workflow stage'
      : 'Not selected ' + this.props.display + ' workflow stage';

    return (
      <div className={classes}
        aria-label={ariaLabel}
        role="tab"
        onClick={ (e) => this.clickWorkflowState(e, this.props.value) }
        onKeyDown={ (e) => this.handleKeyPressWorkFlowState(e, this.props.value) }
        tabIndex={0}>
        <p className="stage-text">
          {this.props.display}
        </p>
      </div>
    );
  }
}
