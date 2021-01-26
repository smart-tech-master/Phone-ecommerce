/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Profile', () => {
  beforeEach(() => {
    cy.visit('/profile');
  });

  it('Profile Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.profile);
  });
});
