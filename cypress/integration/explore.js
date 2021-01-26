/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Explore', () => {
  beforeEach(() => {
    cy.visit('/explore');
  });

  it('Explore Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.explore);
  });
});
