import Reconciler from 'react-reconciler';

let UNDEFINED;

import {
  unstable_scheduleCallback as schedulePassiveEffects,
  unstable_cancelCallback as cancelPassiveEffects,
  unstable_now as now
} from 'scheduler';
import propsEqual from './props-equal';
import * as N from '@pptx-renderer/primitives';

const emptyObject = {};

const HostConfig = {
  schedulePassiveEffects,

  cancelPassiveEffects,

  supportsMutation: true,

  isPrimaryRenderer: false,

  warnsIfNotActing: false,

  now,

  useSyncScheduling: true,

  appendInitialChild(parentInstance, child) {
    parentInstance.children.push(child);
  },

  createInstance(type, { children, ...props }) {
    return {
      type,
      props: props || {},
      style:{},
      children: []
    };
  },

  createTextInstance(text /* rootContainerInstance*/) {
    return { type: N.TextInstance, value: text };
  },

  finalizeInitialChildren(/* element, type, props*/) {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit() {
    // Noop
  },

  clearContainer() {
    // Noop
  },

  prepareUpdate(element, type, oldProps, newProps) {
    return !propsEqual(oldProps, newProps);
  },

  resetAfterCommit(/* params*/) {
    // Noop
  },

  resetTextContent(/* element*/) {
    // Noop
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  shouldSetTextContent(/* type, props*/) {
    return false;
  },

  appendChild(parentInstance, child) {
    parentInstance.children.push(child);
  },

  appendChildToContainer(parentInstance, child) {
    if (parentInstance.type === 'ROOT') {
      parentInstance.document = child;
    } else {
      parentInstance.children.push(child);
    }
  },

  insertBefore(parentInstance, child, beforeChild) {
    const index = parentInstance.children?.indexOf(beforeChild);

    if (index === UNDEFINED) {
      return;
    }

    if (index !== -1 && child) {
      parentInstance.children.splice(index, 0, child);
    }
  },

  removeChild(parentInstance, child) {
    const index = parentInstance.children?.indexOf(child);

    if (index === UNDEFINED) {
      return;
    }

    if (index !== -1) {
      parentInstance.children.splice(index, 1);
    }
  },

  removeChildFromContainer(parentInstance, child) {
    const index = parentInstance.children?.indexOf(child);

    if (index === UNDEFINED) {
      return;
    }

    if (index !== -1) {
      parentInstance.children.splice(index, 1);
    }
  },

  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.value = newText;
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    instance.props = newProps;
  }
};

export const renderer = new Reconciler(HostConfig);
