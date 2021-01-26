/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('About Us', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('About Us Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.aboutus);
  });
});
