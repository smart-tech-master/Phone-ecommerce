/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.home);
  });
});
