# Permission Errors

Permission errors occur when a user attempts to access restricted resources
or administrative functionality.

## Common Causes

Permission issues may occur when:

- a role lacks required access
- department permissions are restricted
- workflow approvals require supervisor access

## Example Error

```json
{
  "error": "insufficient_permissions",
  "message": "User does not have access to this resource."
}