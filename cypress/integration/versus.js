/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Versus', () => {
  beforeEach(() => {
    cy.visit('/versus');
  });

  it('Versus Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.versus);
  });
});
