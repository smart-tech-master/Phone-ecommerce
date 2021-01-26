/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Not Found', () => {
  beforeEach(() => {
    cy.visit('/notfound');
  });

  it('Not Found Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.notfound);
  });
});
