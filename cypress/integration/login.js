/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.login);
  });
});
