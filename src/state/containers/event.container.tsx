import * as React from 'react';
import { connect } from 'react-redux';
import { IEvent } from '../../model/interfaces/IEvent';
import { createEvent, loadEvents } from '../actions/event.actions';
import { RootState } from '../reducers/root.reducers';

export interface IEventState {
  events: IEvent[];
}

export interface IEventActions {
  loadEvents(): void;
  createEvent(event: IEvent): void;
}

const mapStateToProps = (state: RootState) => ({
  events: state.events.events
});

const mapDispatchToProps: IEventActions = {
  loadEvents,
  createEvent,
};

export const withLists = () => (Component: React.ComponentType) => {
  class EventContainer extends React.PureComponent {
    public render() {
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(EventContainer);
};

